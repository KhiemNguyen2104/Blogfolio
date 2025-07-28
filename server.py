from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import mimetypes

class RouteHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        route_map = {
            '/': 'index.html',
            '/blog': 'index.html',
            '/about': 'index.html',
            '/latex': 'index.html',
        }

        # Check if route exists
        if self.path in route_map:
            file_path = route_map[self.path]
        else:
            # Remove leading slash to get relative file path
            file_path = self.path.lstrip('/')
        
        # Serve file if it exists
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            mime_type, _ = mimetypes.guess_type(file_path)
            self.send_header("Content-type", mime_type or "application/octet-stream")
            self.end_headers()
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"<h1>404 Not Found</h1>")

server_address = ('', 5500)
httpd = HTTPServer(server_address, RouteHandler)
print("Server running at http://localhost:5500")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    httpd.server_close()
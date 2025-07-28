const footer = await fetch('../pages/footer.html')
    .then(res => {
        if (!res.ok) throw new Error(`Fetching error: ${res.statusText}`);
        else return res.text();
    })
    .catch(err => { console.err("Fetching error", err) });

const latex = await fetch('../pages/latex.html')
    .then(res => {
        if (!res.ok) throw new Error(`Fetching error: ${res.statusText}`);
        else return res.text();
    })
    .catch(err => { console.err("Fetching error", err) });

const blog = await fetch('../pages/blog.html')
    .then(res => {
        if (!res.ok) throw new Error(`Fetching error: ${res.statusText}`);
        else return res.text();
    })
    .catch(err => { console.err("Fetching error", err) });

const about = await fetch('../pages/about.html')
    .then(res => {
        if (!res.ok) throw new Error(`Fetching error: ${res.statusText}`);
        else return res.text();
    })
    .catch(err => { console.err("Fetching error", err) });

export const routes = {
    '/': `
    ${latex}
    ${footer}`,

    '/about': `
    ${about}
    ${footer}`,

    '/blog': `
    ${blog}
    ${footer}`,

    '/latex': `
    ${latex}
    ${footer}`,
}
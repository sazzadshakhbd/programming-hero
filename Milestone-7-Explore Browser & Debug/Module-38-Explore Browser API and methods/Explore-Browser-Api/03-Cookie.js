const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.slice('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if (cookie) {
        // country=BD
        const cookieValue = cookie.split('=');
        return cookieValue;
    }
}

// Console Log Practice

/*
    1. cookieStore
    2. document.cookie
    3. typeof document.cookie
    4. document.cookie.split(',' )
    5. document.cookie.split('; ').map(c => console.log(c))
    6. document.cookie.split('; ').map(c => console.log(c.split('=')))
*/
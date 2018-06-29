
export function scrollAndFade(event) {
    window.addEventListener('scroll', (e) => {
        console.log('AT | scrollheight: ', document.body.scrollHeight);
        console.log('AT | scrollTop: ', document.body.scrollTop);
        console.log('AT | innerHeight: ', window.innerHeight);
        console.log('AT | e: ', e);
    })
}

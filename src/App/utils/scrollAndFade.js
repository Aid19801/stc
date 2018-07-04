

export function scrollAndFade(e) {

    let bottomReached = false;

        document.onmousemove = handleMouseMove;

        function handleMouseMove(e) {
            console.log(e.clientY);
        }
}

document.addEventListener("mousemove", (event) => {
    // 탭 바가 위치하는 영역을 추정 (예: y 좌표가 0~50px)
    if (event.clientY < 100) {
        console.log("탭 위로 마우스가 이동함");
    }
});

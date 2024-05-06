window.onload = function() {
    // 获取画布和上下文
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    // 定义射线起点和方向
    var rayStartX = width / 2;
    var rayStartY = height / 2;
    var rayAngle = 0;

    // 绘制射线和障碍物
    function draw() {
        ctx.clearRect(0, 0, width, height);

        // 绘制射线
        ctx.beginPath();
        ctx.moveTo(rayStartX, rayStartY);
        var rayEndX = rayStartX + Math.cos(rayAngle) * width;
        var rayEndY = rayStartY + Math.sin(rayAngle) * height;
        ctx.lineTo(rayEndX, rayEndY);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // 绘制障碍物（简单起见，这里只是绘制一个障碍物）
        ctx.fillStyle = 'blue';
        ctx.fillRect(width / 4, height / 4, width / 2, height / 2);
    }

    // 更新射线角度并重新绘制
    function update() {
        rayAngle += 0.01; // 每帧旋转角度
        draw();
        requestAnimationFrame(update);
    }

    update();
};

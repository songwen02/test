// 获取 cube 元素
const cube = document.getElementById('cube');

// 监听点击事件
document.addEventListener('click', function(event) {
    // 获取点击位置的 x 和 y 坐标
    const x = event.clientX;
    const y = event.clientY;

    // 使用 raycast 方法检测点击位置是否在 cube 上
    const hit = document.raycast(x, y);

    // 如果点击到了 cube 上，则旋转 cube
    if (hit) {
        cube.style.transform = 'rotateY(180deg)';
    }
});

// 用于检测点击位置是否在 cube 上的 raycast 方法
document.raycast = function(x, y) {
    // 获取 cube 元素的位置和尺寸信息
    const rect = cube.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top;
    const width = rect.width;
    const height = rect.height;

    // 检测点击位置是否在 cube 的范围内
    if (x >= left && x <= left + width && y >= top && y <= top + height) {
        return true;
    } else {
        return false;
    }
};
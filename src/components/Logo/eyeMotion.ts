export const addEyeMotion = () => {
  document.querySelector('body')?.addEventListener('mousemove', eyeball);

  function eyeball(event: MouseEvent) {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye: any) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotate = radian * (180 / Math.PI) * -1 + 200;
      eye.style.transform = 'rotate(' + rotate + 'deg)';
    });
  }
};
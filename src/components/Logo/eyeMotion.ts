export const addEyeMotion = () => {
  document.querySelector('body')?.addEventListener('mousemove', eyeball);
  document.querySelector('body')?.addEventListener('touchmove', eyeballTouch);

  function eyeball(event: MouseEvent) {
    const eye = document.querySelectorAll('.eye');
    eye.forEach((eye: any) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotate = radian * (180 / Math.PI) * -1 + 150;
      eye.style.transform = 'rotate(' + rotate + 'deg)';
    });
  }
  function eyeballTouch(event: TouchEvent) {
    const eye = document.querySelectorAll('.eye');
    eye.forEach((eye: any) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(
        event.touches[0].screenX - x,
        event.touches[0].screenY - y
      );
      let rotate = radian * (180 / Math.PI) * -1 + 150;
      eye.style.transform = 'rotate(' + rotate + 'deg)';
    });
  }
};

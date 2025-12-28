 document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.box-bottom');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        alert('No function assigned in test');
      });
    });
    const actionBlocks = document.querySelectorAll('.action-block');
    actionBlocks.forEach(block => {
      block.addEventListener('click', function () {
        alert('No function assigned in test for ADD SAMPLE');
      });
    });
  });
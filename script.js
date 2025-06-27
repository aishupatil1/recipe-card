function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

let stepIndex = 0;
const steps = document.querySelectorAll('#steps li');

function startCooking() {
  stepIndex = 0;
  if (steps.length > 0) {
    steps.forEach(s => s.style.background = 'none');
    steps[stepIndex].style.background = '#ffdead';
    updateProgress();
  }
}

function nextStep() {
  if (stepIndex < steps.length - 1) {
    steps[stepIndex].style.background = 'none';
    stepIndex++;
    steps[stepIndex].style.background = '#ffdead';
    updateProgress();
  }
}

function updateProgress() {
  const percent = ((stepIndex + 1) / steps.length) * 100;
  document.getElementById('progress-bar').style.width = percent + '%';
}

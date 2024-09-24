document.getElementById('setReminder').addEventListener('click', function() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;
  
    if (!time) {
      document.getElementById('message').innerText = "Please select a time!";
      return;
    }
  
    const [selectedHour, selectedMinute] = time.split(':').map(Number);
    const now = new Date();
    const reminderTime = new Date(now);
  
    reminderTime.setHours(selectedHour);
    reminderTime.setMinutes(selectedMinute);
    reminderTime.setSeconds(0);
  
    if (reminderTime < now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }
  
    const timeUntilReminder = reminderTime - now;
  
    document.getElementById('message').innerText = `Reminder set for ${day} at ${time} to ${activity}.`;
  
    setTimeout(() => {
      alert(`It's time to ${activity}!`);
      playSound();
    }, timeUntilReminder);
  });
  
  function playSound() {
    const audio = new Audio('notification.mp3.wav');
    audio.play();
  }
  
function bookRide() {
    const pickup = document.getElementById('pickup').value.trim();
    const drop = document.getElementById('drop').value.trim();
  
    if (!pickup || !drop) {
      alert('Please enter both pickup and drop locations.');
      return;
    }
  
    alert(`Your ride from "${pickup}" to "${drop}" has been booked! 🚗`);
  }
  
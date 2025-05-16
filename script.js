function sum() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').value = num1 + num2;
    }

    function sub() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').value = num1 - num2;
    }

    function mul() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').value = num1 * num2;
    }

    function div() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      document.getElementById('result').value = num1 / num2;
    }

    function clearFields() {
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
      document.getElementById('result').value = '';
    }
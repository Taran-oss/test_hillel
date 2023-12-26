const person = {
    name: 'Alex',
    age: 22
  };

  const engineer = {
    role: 'Engineer',
    department: 'Software Development',
    experience: 5
  };
  
  const QA_engineer = Object.create(engineer);
  QA_engineer.role = 'QA Engineer';
  QA_engineer.testingTool = 'Selenium';
  QA_engineer.name = 'Peter';
  QA_engineer.age = 33;
  
  
  
  showDetails (engineer.role, engineer.department, engineer.experience,null)
  showDetails (QA_engineer.role, QA_engineer.department, QA_engineer.experience,QA_engineer.testingTool)
  
  
  function showDetails(role, department, experience, testingTool) {
    console.log("Role: " + role);
    console.log("Department: " + department);
    console.log("Experience: " + experience);
    if(testingTool){
      console.log("Testing Tool: " + testingTool);
    }
  }
  
  
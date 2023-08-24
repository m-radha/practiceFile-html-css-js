//STORE DATA
const student={id:1,name:'radha'};
localStorage.setItem('s1',JSON.stringify(student));
//RETRIEVE DATA
const storedStu= localStorage.getItem('s1');
const finalStuData=JSON.parse(storedStu);
// console.log(finalStuData);
// console.log(finalStuData.name);

//TO DISPLAY THE CONTENT FROM LOCALSTORAGE TO DOM
const StuDataEle=document.getElementById('StuData');
//CONDITION FOR DISPLAY DATA INTO DOM

if(finalStuData){
    StuDataEle.textContent=`ID:${finalStuData.id}, NAME:${finalStuData.name}`;
}
else{
    StuDataEle.textContent='Student data not found!';
}
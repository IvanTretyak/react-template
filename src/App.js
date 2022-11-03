import UserInfo from './components/userInfo';

function App() {
  // function compare(a, b) {
  //   if (a < b) return 'hello from function';
  //   else return 'goodbye from function';
  // }
  const people = { firstName: 'Petya', age: 34, gender: 'men' };
  const style = { backgroundColor: 'red' };
  const cat = { nickname: 'Vasya', age: 5 };
  const array = ['left', 'right', 'top'];
  console.log(cat);
  return (
    <>
      <div style={style}>
        {array.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <UserInfo data={people} />
      </div>
    </>
  );
}
export default App;

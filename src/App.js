import UserInfo from './components/userInfo';

function App() {
  // function compare(a, b) {
  //   if (a < b) return 'hello from function';
  //   else return 'goodbye from function';
  // }
  const array = ['left', 'right', 'top'];
  console.log(cat);
  console.log(dog);
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

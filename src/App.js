import UserInfo from './components/userInfo';

function App() {
  // function compare(a, b) {
  //   if (a < b) return 'hello from function';
  //   else return 'goodbye from function';
  // }
  const people = { firstName: 'Vasya', age: 32, gender: 'men' };
  const style = { backgroundColor: 'yellow' };
  const array = ['left', 'right', 'top'];
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

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
for (const Kkey of Object.keys(user)) {
    console.log(Kkey + " значение: " + user[Kkey]);
};
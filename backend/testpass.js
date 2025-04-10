const bcrypt = require('bcryptjs');

const plainPassword = "12345678"; // Replace with the password you used during signup
const hashed = "$2a$10$pn/D0VcKInPqDeTCn5R4dut5rf7v5PXN.iogHtzmpWy.ZrNovuHRu"; // Paste the hashed one from MongoDB

bcrypt.compare(plainPassword, hashed).then(match => {
    console.log("Password Match:", match); // true or false
});

import * as fs from "fs";

//CREATE
const Create = () => {
  fs.writeFile(
    "employees.json",
    '[{"name": "Employee 1 Name", "salary": 2000}]',
    (err) => {
      if (err) throw err;
      console.log("--Dosya başarıyla oluşturuldu--");
    }
  );
};

//READ
const Read = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    console.log("--Dosya başarıyla okundu--");
  });
};

//UPDATE
const Update = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    arr.push({ name: "Employee3  Name", salary: 51000 });
    fs.writeFile("employees.json", JSON.stringify(arr), "utf8", (error) => {
      if (error) throw error;
      console.log("--Dosya başarıyla güncellendi--");
    });
  });
};

//DELETE
const Delete = () => {
  fs.unlink("employees.json", (err) => {
    if (err) throw err;
    console.log("--Dosya başarıyla silindi--");
  });
};

// Create();
// Read();
// Update();
// Delete();

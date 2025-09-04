import { saludar } from "./saludador.js";

describe("Bot Saludador", () => {
  it("debería saludar 'Hola'", () => {
    expect(saludar({ hora: 10 })).toBe("Hola");
  });

  it("debería saludar con nombre ", () => {
    expect(saludar({ nombre: "Nicole" })).toBe("Hola, Nicole");
  });

  it("debería saludar con nombre y hora", () => {
    expect(saludar({ nombre: "Nicole", hora: 10 })).toBe("Buenos días, Nicole");
  });

  it("debería usar 'Señorito' cuando genero=M sin hora", () => {
    expect(saludar({ nombre: "Juan", genero: "M" })).toBe("Hola, Señorito Juan");
  });

  it("debería usar 'Señorita' cuando genero=F por la tarde", () => {
    expect(saludar({ nombre: "Ana", genero: "F", hora: 16 }))
      .toBe("Buenas tardes, Señorita Ana");
  });

  it("si genero vacío/no válido NO usa tratamiento", () => {
    expect(saludar({ nombre: "Alex", genero: "", hora: 9 }))
      .toBe("Buenos días, Alex");
    expect(saludar({ nombre: "Alex", genero: "O", hora: 21 }))
      .toBe("Buenas noches, Alex");
  });

  it("M, edad 25 => 'Chico'", () => {
    expect(saludar({ nombre: "Juan", genero: "M", edad: 25 }))
      .toBe("Hola, Chico Juan");
  });

  it("F, edad 28, tarde => 'Chica'", () => {
    expect(saludar({ nombre: "Ana", genero: "F", edad: 28, hora: 16 }))
      .toBe("Buenas tardes, Chica Ana");
  });

  it("M, edad 45 => 'Sr.'", () => {
    expect(saludar({ nombre: "Carlos", genero: "M", edad: 45 }))
      .toBe("Hola, Sr. Carlos");
  });

  it("F, edad 40, noche => 'Sra.'", () => {
    expect(saludar({ nombre: "Laura", genero: "F", edad: 40, hora: 21 }))
      .toBe("Buenas noches, Sra. Laura");
  });


  it("sin género, edad 50 => 'Hola, Sr. Alex'", () => {
    expect(saludar({ nombre: "Alex", edad: 50 }))
      .toBe("Hola, Sr. Alex");
  });
});

describe("Bot Saludador - Inglés (en)", () => {
  it("sin nombre ni hora => 'Hello'", () => {
    expect(saludar({ idioma: "en" })).toBe("Hello");
  });

  it("sin nombre pero con hora => 'Hello'", () => {
    expect(saludar({ idioma: "en", hora: 10 })).toBe("Hello");
  });

  it("con nombre y hora 10 => 'Good morning, Bob'", () => {
    expect(saludar({ nombre: "Bob", idioma: "en", hora: 10 }))
      .toBe("Good morning, Bob");
  });

  it("género F a las 15 => 'Good afternoon, Ms. Alice'", () => {
    expect(saludar({ nombre: "Alice", genero: "F", idioma: "en", hora: 15 }))
      .toBe("Good afternoon, Ms. Alice");
  });

  it("género M sin hora => 'Hello, Mr. John'", () => {
    expect(saludar({ nombre: "John", genero: "M", idioma: "en" }))
      .toBe("Hello, Mr. John");
  });

  it("sin género, edad 45 sin hora => 'Hello, Mr. Carlos'", () => {
    expect(saludar({ nombre: "Carlos", edad: 45, idioma: "en" }))
      .toBe("Hello, Mr. Carlos");
  });

  it("sin género, edad 29 por la mañana => 'Good morning, Alex'", () => {
    expect(saludar({ nombre: "Alex", edad: 29, idioma: "en", hora: 9 }))
      .toBe("Good morning, Alex");
  });
});

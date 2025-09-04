import { saludar } from "./saludador.js";

describe("Bot Saludador", () => {
  
  it("debería saludar 'Hola'", () => {
    expect(saludar({ hora: 10 })).toBe("Hola");
  });
    it("debería saludar con nombre ", () => {
    expect(saludar({ nombre: "Nicole",  })).toBe("Hola, Nicole");
  });
    it("debería saludar con nombre y hora", () => {
    expect(saludar({ nombre: "Nicole", hora: 10 })).toBe("Buenos días, Nicole");
  });
  
  it("debería usar 'Sr.' cuando genero=M sin hora", () => {
    expect(saludar({ nombre: "Juan", genero: "M" })).toBe("Hola, Señorito Juan");
  });

  it("debería usar 'Sra.' cuando genero=F por la tarde", () => {
    expect(saludar({ nombre: "Ana", genero: "F", hora: 16 }))
      .toBe("Buenas tardes, Señorita Ana");
  });

  it("si genero vacío/no válido NO usa tratamiento", () => {
    expect(saludar({ nombre: "Alex", genero: "", hora: 9 }))
      .toBe("Buenos días, Alex");
    expect(saludar({ nombre: "Alex", genero: "O", hora: 21 }))
      .toBe("Buenas noches, Alex");
  });

});

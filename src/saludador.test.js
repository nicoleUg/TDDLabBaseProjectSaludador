import { saludar } from "./saludador.js";

describe("Bot Saludador", () => {
  
  it("debería saludar 'Hola'", () => {
    expect(saludar({ hora: 10 })).toBe("Hola");
  });
    it("debería saludar con nombre ", () => {
    expect(saludar({ nombre: "Nicole",  })).toBe("Hola, Nicole");
  });
  });


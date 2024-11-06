import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario("1000417163", "felipe","saldarriaga","pipesalda2002@gmail.com","3235111270","Cra 65#45-5")).toBeTruthy();
  });
});

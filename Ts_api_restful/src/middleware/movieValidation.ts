import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("o Título é obrigatório")
      .isLength({ min: 5 })
      .withMessage("O título precisa ter no mínimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um valor numérico")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser maior que 0 e menor que 10");
        }

        return true;
      }),
    body("description")
      .isString()
      .isLength({ min: 1 })
      .withMessage("A descrição precisa ser obrigatória"),
    body("director")
      .isString()
      .isLength({ min: 1 })
      .withMessage("O nome do diretor precisa ser obrigatório"),
    body("poster").isURL().withMessage("A imagem precisa ser uma URL"),
  ];
};

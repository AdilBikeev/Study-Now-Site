import { getRandomArbitrary } from "utils/randomHelper";
import { SubThemeCourse, AutoGenerateSubThemeCourse } from "../../../type";

/**
 * Массив под-тем для 1-ого задания
 */
export const School_subTheme_1: Array<SubThemeCourse> =  [
    {
            completed: false,
            question: `Килограмм орехов стоит 75 рублей. 
            Маша купила 4 кг 400 г орехов. 
            Сколько рублей сдачи она должна получить с 350 рублей? (Если ответом явл. не целое число - тогда отбросьте дробную часть)`,
            solution: `Найдем стоимость покупки: 4 кг 400 г орехов стоит 4,4 * 75 = 330 рублей. Значит, 
            с 350 рублей Маша получит сдачи 350 − 330 = 20 рублей.`,
            generateInputData: (): AutoGenerateSubThemeCourse => {
                let answer, nutsPrice, nutsKilo, nutsGram, nutsWeight, amount_value = 0;

                do {
                    nutsPrice = getRandomArbitrary(50, 100);
                    nutsKilo = getRandomArbitrary(1, 5);
                    nutsGram = getRandomArbitrary(100, 999);
                    nutsWeight = (nutsKilo + nutsGram/1000);
                    amount_value = getRandomArbitrary(350, 5000);

                    answer = Math.floor(amount_value - nutsWeight * nutsPrice);
                } while (answer < 0);


                return {
                    question: `Килограмм орехов стоит ${nutsPrice} рублей. 
                    Маша купила ${nutsKilo} кг ${nutsGram} г. орехов. 
                    Сколько рублей сдачи она должна получить с ${amount_value} рублей? (Если ответом явл. не целое число - тогда отбросьте дробную часть)`,
                    solution: `Найдем стоимость покупки: ${nutsKilo} кг ${nutsGram} г орехов стоит ${nutsWeight} * ${nutsPrice} = ${Math.floor(nutsWeight * nutsPrice)} рублей. Значит, 
                    с ${Math.floor(nutsWeight * nutsPrice)} рублей Маша получит сдачи ${amount_value} − ${Math.floor(nutsWeight * nutsPrice)} = ${answer} рублей.`,
                    answer: answer.toString()
                }
            },
            theory: 'Гуглите',
            answer: '20'
        },
];
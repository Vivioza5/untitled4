package first.lesson15;
import java.util.ArrayList;
import java.util.LinkedList;
public class LInkedArrayLists {
    public static void main(String[] args) {
//        пользователь вводит размер коллекции
        int size = FunctionalSoft.InputSize();
//        диапазон случайных  пользователь вводит через консоль
        int min = FunctionalSoft.InputFirst();
        int max = FunctionalSoft.InputSecond();
//Создание коллекции и вывод ее в консоль
        ArrayList<Integer> randomCol = FunctionalSoft.addCollArraylist(size, min, max);
        FunctionalSoft.printingList(randomCol);
//        пользователь вводит размер коллекции
        size = FunctionalSoft.InputSize();
        //  Создание коллекции и вывод ее в консоль
        LinkedList<Integer> randomCol2 = FunctionalSoft.addCollLinkedlist(size, min, max);
        FunctionalSoft.printingLinkedList(randomCol2);


    }
}

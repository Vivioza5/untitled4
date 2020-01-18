package first.lesson15;
import java.util.*;
import java.util.ArrayList;

public class FunctionalSoft {
    public static int InputSize() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter size for collection: ");
        int size = scanner.nextInt();
        scanner.close();
        return size;
    }

    public static int InputFirst() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Заполните массив случайными числами, укажите диапазон двумя числами!!");
        System.out.println("enter first number: ");
        int min = scanner.nextInt();
        scanner.close();
        return min;
    }

    public static int InputSecond() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter second number: ");
        int max = scanner.nextInt();
        scanner.close();
        return max;
    }

    public static ArrayList<Integer> addCollArraylist(int size, int min, int max) {
        Random random = new Random();
        ArrayList<Integer> randomCol = new ArrayList<Integer>();

        for (int i = 0; i < size; i++) {
            int num = random.nextInt((max - min) + 1) + min;
//            if (num != num)continue; добавление проверки на повторяемость
            randomCol.add(i, num);
        }
        return randomCol;
    }
    public static LinkedList<Integer> addCollLinkedlist(int size, int min, int max) {
        Random random = new Random();
        LinkedList<Integer> randomCol = new LinkedList<>();

        for (int i = 0; i < size; i++) {
            int num = random.nextInt((max - min) + 1) + min;
//            if (num != num)continue; добавление проверки на повторяемость
            randomCol.add(i, num);
        }
        return randomCol;
    }

    public static void printingList(ArrayList<Integer> randomCol) {
        System.out.println("Now print ArrayList");
        for (int i = 0; i <randomCol.size() ; i++) {
            System.out.println((i+1) + " element= " + randomCol.get(i));

        }

    }public static void printingLinkedList(LinkedList<Integer> randomCol) {
        System.out.println("Now print LinkedList");
        for (int i = 0; i <randomCol.size() ; i++) {
            System.out.println((i+1) + " element= " + randomCol.get(i));

        }

    }

}

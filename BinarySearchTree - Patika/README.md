# BinarySearchTree
Patika.Dev

Proje 3
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

1. array [0,1,2,3,4,5,6,7,8,9] şeklinde sıralanır
2. 5 root seçilir, yeni arrayların rootları kalınla belirtilmiştir.
3. [0,1, **2**,3,4] ve [6,7, **8**,9] sonucunda aşağıda şekilde oluşur

                    [5]
            [2]             [8]
        [0,1] [3,4]    [6,7]    [9]
  
4. Final olarak aşağıdaki şekilde BST oluşur.

                         [5]
                [2]                  [8]
            [1]     [3]           [7]    [9]
        [0]             [4]     [6]

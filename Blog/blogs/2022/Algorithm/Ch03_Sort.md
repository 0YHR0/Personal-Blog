---
title: Ch03 Sort
date: 2019-07-12
tags:
 - Algorithm
categories:
 - Algorithm

---



### **稳定性**    



首先，排序算法的稳定性大家应该都知道，通俗地讲就是能保证排序前2个相等的数其在序列的前后位置顺序和排序后它们两个的前后位置顺序相同。在简单形式化一下，如果Ai = Aj，Ai原来在位置前，排序后Ai还是要在Aj位置前。



   其次，说一下稳定性的好处。排序算法如果是稳定的，那么从一个键上排序，然后再从另一个键上排序，第一个键排序的结果可以为第二个键排序所用。基数排序就是这样，先按低位排序，逐次按高位排序，低位相同的元素其顺序再高位也相同时是不会改变的。另外，如果排序算法稳定，对基于比较的排序算法而言，元素交换的次数可能会少一些（个人感觉，没有证实）。

回到主题，现在分析一下常见的排序算法的稳定性，每个都给出简单的理由。



### (1) 冒泡排序

冒泡排序就是把小的元素往前调或者把大的元素往后调。比较是相邻的两个元素比较，交换也发生在这两个元素之间。所以，如果两个元素相等，我想你是不会再无聊地把他们俩交换一下的；如果两个相等的元素没有相邻，那么即使通过前面的两两交换把两个相邻起来，这时候也不会交换，所以相同元素的前后顺序并没有改变，所以冒泡排序是一种稳定排序算法。

**不断比较相邻两个数**

```go
func BubbleSort(arr *[12]int) {
	flag := false // 优化，若某次发现不用交换，则提前结束排序
	for i := 0; i < len(arr)-1; i++ {
		for j := 1; j < len(arr)-i; j++ {
			if arr[j-1] > arr[j] {
				arr[j], arr[j-1] = arr[j-1], arr[j]
				flag = true
			}
		}
		if flag == false { // 如果在某一次循环中没有交换过，则直接break
			break
		} else {
			flag = false // 下次判断的初始条件
		}
	}
	fmt.Println("this is bubble sort:")
}
```







### (2)选择排序

选择排序是给每个位置选择当前元素最小的，比如给第一个位置选择最小的，在剩余元素里面给第二个元素选择第二小的，依次类推，直到第n - 1个元素，第n个元素不用选择了，因为只剩下它一个最大的元素了。那么，在一趟选择，如果当前元素比一个元素小，而该小的元素又出现在一个和当前元素相等的元素后面，那么交换后稳定性就被破坏了。比较拗口，举个例子，序列5 8 5 2 9，我们知道第一遍选择第1个元素5会和2交换，那么原序列中2个5的相对前后顺序就被破坏了，所以选择排序不是一个稳定的排序算法。



**每次找到整个数组中最小的数，把它放在数组前端（效率高于冒泡排序）**

```go
func SelectSort(arr *[12]int) {
	for i := 0; i < len(arr)-1; i++ {
		min := i
		//find the min value position
		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[min] {
				min = j
			}
		}
		arr[i], arr[min] = arr[min], arr[i]
	}
}
```





### (3)插入排序

插入排序是在一个已经有序的小序列的基础上，一次插入一个元素。当然，刚开始这个有序的小序列只有1个元素，就是第一个元素。比较是从有序序列的末尾开始，也就是想要插入的元素和已经有序的最大者开始比起，如果比它大则直接插入在其后面，否则一直往前找直到找到它该插入的位置。如果碰见一个和插入元素相等的，那么插入元素把想插入的元素放在相等元素的后面。所以，相等元素的前后顺序没有改变，从原无序序列出去的顺序就是排好序后的顺序，所以插入排序是稳定的。



**把数据看成一个有序表与一个无序表，开始时有序表中有一个元素，无序表中有n-1个元素，慢慢把无序表中的元素插入到有序表中。**

```go
func InsertSort(arr *[12]int) {
	for i := 1; i < len(arr); i++ {
		insertIndex := i
		j := 0
		// find the position in the sorted array
		for j = 0; j < i; j++ {
			if arr[insertIndex] < arr[j] {
				//find the postion j
				break
			}
		}
		insertNum := arr[insertIndex]
		// move all the larger ones to the right
		for k := insertIndex; k > j; k-- {
			arr[k] = arr[k-1]
		}
		arr[j] = insertNum
	}
}
```



#### 双插入排序

1、为减少二分插入排序中的比较及移动次数，可考虑一次以两个数据为单位进行插入。以升序为例，每次插入时先找出两个待插入数据中的较大者，按二分查找法确定其位置，在向后移动已有序记录时一次移动两个位置(因为较小记录肯定将来放在较大记录之前)；插入较大数据后再按传统二分插入排序算法在较大数据所处位置与第一条数据所处位置之间插入较小数据。



2、因为在插入较大数据时已经缩小了较小数据的查找范围，同时，在给较大记录移出存放空间时已经提前将一部分本来应该在插入较小数据时才移动的记录提前一趟进行了移动，从而既减少了确定较小记录位置时的比较次数，又减少了移动次数，性能得到了改善。



### (4)快速排序

快速排序有两个方向，左边的i下标一直往右走，当a[i] <= a[center_index]，其中center_index是中枢元素的数组下标，一般取为数组第0个元素。而右边的j下标一直往左走，当a[j] > a[center_index]。如果i和j都走不动了，i <= j，交换a[i]和a[j],重复上面的过程，直到i > j。 交换a[j]和a[center_index]，完成一趟快速排序。在中枢元素和a[j]交换的时候，很有可能把前面的元素的稳定性打乱，比如序列为5 3 3 4 3 8 9 10 11，现在中枢元素5和3（第5个元素，下标从1开始计）交换就会把元素3的稳定性打乱，所以快速排序是一个不稳定的排序算法，不稳定发生在中枢元素和a[j] 交换的时刻。

![image-20230417000451830](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230417000451830.png)

**分治算法，找一个基准值，比其小的放左边（可以乱序），大的放右边（可以乱序），以此类推，效率高**

```go
func QuickSort(arr *[12]int, leftBound int, rightBound int) {
	// quit condition
	if leftBound >= rightBound {
		return
	}
	// use the most right one as the pivot
	pivot := arr[rightBound]
	left := leftBound
	right := rightBound - 1
	for left <= right {
		for left <= right && arr[left] <= pivot {
			left++
		}
		for left <= right && arr[right] > pivot {
			right--
		}
		// attention! IF here
		if left < right {
			arr[left], arr[right] = arr[right], arr[left]
		}
	}
	arr[left], arr[rightBound] = arr[rightBound], arr[left]
	QuickSort(arr, leftBound, left-1)
	QuickSort(arr, left+1, rightBound)
}
```

Java

```java
public class Fast {

	public static void main(String[] args) {
		int[] arr = new int[] {6,2, 1, 9, 8, 7, 3, 4, 10};
		quicksort(arr, 0, 8);
	
		

	}
	public static void print(int[]arr) {
		for(int i : arr) {
			System.out.print(i + " ");
		}
	}
	public static void swap(int []arr, int i ,int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	public static void quicksort(int []arr, int leftBound ,int rightBound) {
		if(leftBound >= rightBound) return;//一定要先判断，否则可能出现数组越界
		int pivot = arr[rightBound];
		int left = leftBound;
		int right = rightBound - 1;
		while(left <= right) {//当左指针没有遇到右指针时，一直找
			while(left <= right && arr[left] <= pivot) {//左指针找
				left ++;
			}
			while(left <= right && arr[right] > pivot) {//右指针找
				right --;
			}
			if(left < right) swap(arr, left, right);//注意这边还要判断一次
		}
		swap(arr,left,rightBound);//把pivot放到合适的位置,left为轴的位置
		System.out.println(left);
		print(arr);
		System.out.println();
		quicksort(arr, leftBound, left - 1);
		quicksort(arr, left + 1, rightBound);
	}

}
```

- java源码排序：小于256个元素，使用单轴快速排序，大于256个元素，使用双轴快速排序。
- 小数组用双插入排序，大数组用双轴快排
- 荷兰国旗问题
- 时间复杂度：O（n*logn）
- 空间复杂度：O（logn）



#### 双轴快排

在快速排序中最坏的情况就是选取的轴是极值，双轴快排把数组分为三部分，取两个轴，最坏情况是这两个值相等，但是概率不大![image-20230419131406256](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419131406256.png)



双轴快速排序算法思路和三向切分快速排序算法的思路基本一致，双轴快速排序算法使用两个轴，通常选取最左边的元素作为pivot1和最右边的元素作pivot2。首先要比较这两个轴的大小，如果pivot1 > pivot2，则交换最左边的元素和最右边的元素，已保证pivot1 <= pivot2。双轴快速排序同样使用i，j，k三个变量将数组分成四部分

![image-20230419133508005](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419133508005.png)

A[L+1, i]是小于pivot1的部分，A[i+1, k-1]是大于等于pivot1且小于等于pivot2的部分，A[j, R]是大于pivot2的部分，而A[k, j-1]是未知部分。和三向切分的快速排序算法一样，初始化i = L，k = L+1，j=R，k自左向右扫描直到k与j相交为止（k == j）。我们扫描的目的就是逐个减少未知元素，并将每个元素按照和pivot1和pivot2的大小关系放到不同的区间上去。

在k的扫描过程中我们可以对a[k]分为三种情况讨论（注意我们始终保持最左边和最右边的元素，即双轴，不发生交换）

1. a[k] < pivot1 i先自增，交换a[i]和a[k]，k自增1，k接着继续扫描

2. a[k] >= pivot1 && a[k] <= pivot2 k自增1，k接着继续扫描

3. a[k] > pivot2: 这个时候显然a[k]应该放到最右端大于pivot2的部分。但此时，我们不能直接将a[k]与j的下一个位置a[--j]交换（可以认为A[j]与pivot1和pivot2的大小关系在上一次j自右向左的扫描过程中就已经确定了，这样做主要是j首次扫描时避免pivot2参与其中），因为目前a[--j]和pivot1以及pivot2的关系未知，所以我们这个时候应该从j的下一个位置（--j）自右向左扫描。而a[--j]与pivot1和pivot2的关系可以继续分为三种情况讨论

​    3.1）a[--j] > pivot2 j接着继续扫描

​    3.2）a[--j] >= pivot1且a[j] <= pivot2 交换a[k]和a[j]，k自增1，k继续扫描（注意此时j的扫描就结束了）

​    3.3） a[--j] < pivot1 先将i自增1，此时我们注意到a[j] < pivot1, a[k] > pivot2, pivot1 <= a[i] <=pivot2，那么我们只需要将a[j]放到a[i]上，a[k]放到a[j]上，而a[i]放到a[k]上。k自增1，然后k继续扫描（此时j的扫描就结束了）

**注意**

1. pivot1和pivot2在始终不参与k，j扫描过程。

2. 扫描结束时，A[i]表示了小于pivot1部分的最后一个元素，A[j]表示了大于pivot2的第一个元素，这时我们只需要交换pivot1（即A[L]）和A[i]，交换pivot2（即A[R]）与A[j]，同时我们可以确定A[i]和A[j]所在的位置在后续的排序过程中不会发生变化（这一步非常重要，否则可能引起无限递归导致的栈溢出），最后我们只需要对A[L, i-1]，A[i+1, j-1]，A[j+1, R]这三个部分继续递归上述操作即可。



```go
func DoublePivotQuickSort(arr *[12]int, leftBound int, rightBound int) {
	if leftBound >= rightBound {
		return
	}

	if arr[leftBound] > arr[rightBound] {
		arr[leftBound], arr[rightBound] = arr[rightBound], arr[leftBound]
	}

	pivot1 := arr[leftBound]
	pivot2 := arr[rightBound]
	left := leftBound
	right := rightBound
	k := leftBound + 1

OutLoop:
	for k < right {
		if arr[k] < pivot1 {
			left++
			arr[left], arr[k] = arr[k], arr[left]
			k++
		} else if arr[k] <= pivot2 && arr[k] >= pivot1 {
			k++
		} else {
			right--
			for arr[right] > pivot2 {
				if right <= k {
					break OutLoop
				}
				right--
			}
			if arr[right] <= pivot2 && arr[right] >= pivot1 {
				arr[k], arr[right] = arr[right], arr[k]
				k++
			} else {
				arr[right], arr[k] = arr[k], arr[right]
				left++
				arr[k], arr[left] = arr[left], arr[k]
				k++
			}
		}
	}

	arr[leftBound], arr[left] = arr[left], arr[leftBound]
	arr[right], arr[rightBound] = arr[rightBound], arr[right]

	//一次双轴快排至少确定两个轴（元素）的位置
	DoublePivotQuickSort(arr, leftBound, left-1)
	DoublePivotQuickSort(arr, left+1, right-1)
	DoublePivotQuickSort(arr, right+1, rightBound)

}
```



### (5)归并排序

归并排序是把序列递归地分成短序列，递归出口是短序列只有1个元素（认为直接有序）或者2个序列（1次比较和交换），然后把各个有序的段序列合并成一个有序的长序列，不断合并直到原序列全部排好序。可以发现，在1个或2个元素时，1个元素不会交换，2个元素如果大小相等也没有人故意交换，这不会破坏稳定性。那么，在短的有序序列合并的过程中，稳定是是否受到破坏？没有，合并过程中我们可以保证如果两个当前元素相等时，我们把处在前面的序列的元素保存在结果序列的前面，这样就保证了稳定性。所以，归并排序也是稳定的排序算法。![image-20230419162939213](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419162939213.png)

```go
// 归并排序
func MergeSort(nums []int) []int {
	if len(nums) <= 1 {
		return nums
	}

	// 获取分区位置
	p := len(nums) / 2
	// 通过递归分区
	left := MergeSort(nums[0:p])
	right := MergeSort(nums[p:])
	// 排序后合并
	return merge(left, right)
}

// 排序合并
func merge(left []int, right []int) []int {
	i, j := 0, 0
	m, n := len(left), len(right)
	// 用于存放结果集
	var result []int
	for {
		// 任何一个区间遍历完，则退出
		if i >= m || j >= n {
			break
		}
		// 对所有区间数据进行排序
		if left[i] <= right[j] {
			result = append(result, left[i])
			i++
		} else {
			result = append(result, right[j])
			j++
		}
	}

	// 如果左侧区间还没有遍历完，将剩余数据放到结果集
	if i != m {
		for ; i < m; i++ {
			result = append(result, left[i])
		}
	}

	// 如果右侧区间还没有遍历完，将剩余数据放到结果集
	if j != n {
		for ; j < n; j++ {
			result = append(result, right[j])
		}
	}

	// 返回排序后的结果集
	return result
}
```

- 时间复杂度：O(n*logn)
- 空间复杂度：O(n)
- java和python对于对象的排序都是用的归并排序，因为稳定性高
- java源码对对象的排序是用的TimSort：一次性把元素分为2的n次方个空间，把每一小块使用二分插入排序，再两两归并



### (6)基数排序

基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序，最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以其是稳定的排序算法。



### (7)希尔排序(shell)

希尔排序是按照不同步长对元素进行插入排序，当刚开始元素很无序的时候，步长最大，所以插入排序的元素个数很少，速度很快；当元素基本有序了，步长很小， 插入排序对于有序的序列效率很高。所以，希尔排序的时间复杂度会比O(n^2)好一些。由于多次插入排序，我们知道一次插入排序是稳定的，不会改变相同元素的相对顺序，但在不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，最后其稳定性就会被打乱，所以shell排序是不稳定的。



**高效的插入排序（插入排序的最坏情况效率低）**

```go
func ShellSort(arr *[12]int) {

	for gap := len(arr) / 2; gap > 0; gap = gap / 2 {
		// back pointer
		for back := gap; back < len(arr); back++ {
			front := back - gap
			// Insert sort
			tmp := arr[back]
			for ; front >= 0 && arr[front] > tmp; front = front - gap {
				arr[front+gap] = arr[front]
			}
			arr[front+gap] = tmp
		}
	}
}
```



参考：https://www.youtube.com/watch?v=1yDcmjLTWOg

+ 交换法：效率偏低，好理解

  ```java
  public static void shellsort(int[] arr) {
  		int temp = 0;
  		int count = 1;
  		//使用希尔排序中插入排序的次数,gap代表步长
  		for(int gap = arr.length / 2; gap > 0; gap = gap / 2) {
  			//插入排序开始，先每组前2个元素排序(有序表)，然后接下来的元素插入到这个有序表中
  			for(int i = gap ; i < arr.length; i++) {//组间交替执行
  				for(int j = i - gap; j >= 0 ; j = j - gap) {//组内插入排序
  					//如果前一个元素大的话，交换
  					if(arr[j] > arr[j + gap]) {
  						temp = arr[j];
  						arr[j] = arr[j + gap];
  						arr[j + gap] = temp;
  					}
  				}
  			}
  			System.out.println("第 " + count + " 次排序结果： ");
  			for (int k : arr) {
  				System.out.print(k + " ");
  			}
  			System.out.println();
  			count ++;
  		}
  	}
  ```

  

+ 位移法：效率高

  ```java
  public static void shell(int[] arr) {
  		int temp = 0;
  		int count = 0;
  		for(int gap = arr.length / 2;gap > 0; gap = gap / 2) {//分组
  			for(int i = gap - 1; i < arr.length; i++) {//交替遍历各组元素
  				int j = i - gap;
  				temp = arr[i];//存放要插入的那个元素
  				while(j >= 0 && temp < arr[j]) {//当要插入的元素还没找到位置，组内元素一直后移
  					arr[j + gap] = arr[j]; 
  					j = j - gap;
  				}
  				arr[j + gap] = temp;//插入
  			}
  			
  			
  			
  			System.out.println("第 " + count + " 次排序结果： ");
  			for (int k : arr) {
  				System.out.print(k + " ");
  			}
  			System.out.println();
  			count ++;
  		}
  	}
  ```

  

  



### (8)堆排序

我们知道堆的结构是节点i的孩子为2 * i和2 * i + 1节点，大顶堆要求父节点大于等于其2个子节点，小顶堆要求父节点小于等于其2个子节点。在一个长为n 的序列，堆排序的过程是从第n / 2开始和其子节点共3个值选择最大（大顶堆）或者最小（小顶堆），这3个元素之间的选择当然不会破坏稳定性。但当为n / 2 - 1， n / 2 - 2， ... 1这些个父节点选择元素时，就会破坏稳定性。有可能第n / 2个父节点交换把后面一个元素交换过去了，而第n / 2 - 1个父节点把后面一个相同的元素没 有交换，那么这2个相同的元素之间的稳定性就被破坏了。所以，堆排序不是稳定的排序算法。

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419171621733.png" alt="image-20230419171621733" style="zoom:50%;" />

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419171629056.png" alt="image-20230419171629056" style="zoom:50%;" />

![image-20230419171720974](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419171720974.png)

排序思想
1.首先将待排序的数组构造成一个大根堆，此时，整个数组的最大值就是堆结构的顶端

2.将顶端的数与末尾的数交换，此时，末尾的数为最大值，剩余待排序数组个数为n-1

3.将剩余的n-1个数再构造成大根堆，再将顶端数与n-1位置的数交换，如此反复执行，便能得到有序数组

注意:升序用大根堆，降序就用小根堆(默认为升序)





对于一个完全二叉树，在填满的情况下（非叶子节点都有两个子节点），每一层的元素个数是上一层的二倍，根节点数量是1，所以最后一层的节点数量，一定是之前所有层节点总数+1，所以，我们能找到最后一层的第一个节点的索引，即节点总数/2（根节点索引为0），这也就是第一个叶子节点，所以第一个非叶子节点的索引就是最后一个叶子结点的索引-1。那么对于填不满的二叉树呢？这个计算方式仍然适用，当我们从上往下，从左往右填充二叉树的过程中，第一个叶子节点，一定是序列长度/2，所以第最后一个非叶子节点的索引就是 arr.len / 2 -1，对于此图数组长度为5，最后一个非叶子节点为5/2-1=1，即为6这个节点![image-20230419172913129](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419172913129.png)

```java
public class HeapSortDemo {

	public static void main(String[] args) {
		int arr[] = new int[] {4,6,9,3,2,8,10,1,7};
		int temp;
		//先找到最大值
		for(int i = arr.length / 2 - 1; i >= 0; i--) {
			adjust(arr, i, arr.length);
		}
		//最大值与最后一位交换，剩下继续堆
		for(int i = arr.length - 1; i >= 0; i--) {
			temp = arr[i];
			arr[i] = arr[0];
			arr[0] = temp;
			adjust(arr, 0, i);
		}
	
		for(int i: arr) {
			System.out.println(i);
		}

	}
	/**
	 * 对堆进行调整
	 * @param arr：要调整的数组
	 * @param i：要调整的节点的引用
	 * @param length：数组的长度
	 */
	public static void adjust(int[] arr, int i, int length) {
		int temp = arr[i];//存放要调整的引用
		//每次调整都是找的左子节点(此次循环是为了调整过的节点继续往下调整)
		for(int k = i * 2 + 1; k < length; k = k * 2 + 1) {
			//让k指向左右节点中较大的一个
			if(arr[k] < arr[k + 1] && k + 1 < length) k++;
			//让左右节点中大的一个跟temp比较
			if(temp < arr[k]) {
				arr[i] = arr[k];
				//arr[k] = temp;这边不用赋值是为了让以后一起赋值，因为每次都是跟temp比较
				i = k;//被调整过的位置继续向下调整
			}
			else {
				break;//由于是从左到右，从上到下调整，所以要调整的节点的左右子树都已经调整过了
			}
			//比较完之后，赋值，不用每次都赋值，增加效率
			arr[i] = temp;
		}
		
	}

}
```



### (9) 桶排序

桶排序的核心思想就是将要排序的数据分到几个有序的桶里，每个桶里的数据再单独进行排序。桶排序完之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。

![image-20230419164052975](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230419164052975.png)



#### 桶排序的时间复杂度为O(n)：

如果要排序的数据有 n 个，我们把它们均匀地划分到 m 个桶内，每个桶里就有 k=n/m 个元素。每个桶内部使用归并排序，时间复杂度为 O(k * logk)。m 个桶排序的时间复杂度就是 O(m * k * logk)，因为 k=n/m，所以整个桶排序的时间复杂度就是 O(n*log(n/m))。当桶的个数m 接近数据个数 n 时，log(n/m) 就是一个非常小的常量，这个时候桶排序的时间复杂度接近 O(n)。

所以，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少，但相应的空间消耗就会增大。 

#### 桶排序的使用条件和适用场景：

桶排序对要排序的数据的要求是非常苛刻的。使用条件如下：

（1）首先，要排序的数据需要很容易就能划分成m个桶，并且，桶与桶之间有着天然的大小顺序。这样每个桶内数据都排序完之后，桶与桶之间的数据不需要在进行排序。

（2）其次，数据在各个桶之间的分布比较均匀的。如果数据经过桶的划分之后，有些桶里的数据非常多，有些非常少，很不平均，那桶内数据排序的时间复杂度就不是常量级了。在极端情况下，如果数据都被划分到一个桶里，那就退化为 O(nlogn) 的排序算法了。

所以，桶排序比较适合用在外部排序中。所谓的外部排序就是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中。

```java
public static void sort(int [] arr, int small, int large) {
		//首先创建一个计数数组,用来记录每个元素出现的次数
		int[] temp = new int[large - small + 1];
		int j = 0;//用来记录计数数组的下标
		for(int i :arr) {
			temp[i - small] ++;
		}
		//重新构建数组
		int s = small;
		for(int i = 0; i < arr.length;) {
			for(int k = 0; k < temp[s - small]; k++) {
				arr[i++] = s; 
			}
			s++;
		}
		
		
	}
```

一种更稳定的算法，使用了累加数组，使得后面的还是在后面

```java
public static void sortstable(int [] arr, int small, int large) {
		//首先创建一个计数数组,用来记录每个元素出现的次数
		int[] temp = new int[large - small + 1];
		int j = 0;//用来记录计数数组的下标
		int[] result = new int[arr.length];
		for(int i :arr) {
			temp[i - small] ++;
		}
		
		//生成计数数组的累加数组，数组记录的是某个值的最后位置
		for(int i = 0; i < temp.length - 1;i++) {
			temp[i + 1] = temp[i] + temp[i + 1];
		}
		
		//重新构建数组(稳定算法，前面的还是在前面，后面的还是在后面)
		for(int i = arr.length - 1; i >= 0; i--) {
			result[--temp[arr[i] - small]] = arr[i];
		}
		//把result返回给arr
		int c = 0;
		for(int i: result) {
			arr[c++] = i;
		}
	
		
		
	}
```



#### 基数排序，桶排序

**多关键字排序思想，如：先排个位数，再排十位数，再排百位数**

```java
public class basenum {

	public static void main(String[] args) {
		int []arr = new int[] {432,326,984,6,49,31,3546};
		sort(arr);
		print(arr);

	}
	public static void sort(int arr[]) {
		//先找到最大位数
		int max = findMax(arr);
		basesort(arr, max);	
		
	}
	public static void print(int[]arr) {
		for(int i : arr) {
			System.out.print(i + " ");
		}
		System.out.println();
	}
	/**
	 * 找到最大位数
	 * @param arr
	 * @return
	 */
	public static int findMax(int arr[]) {
		int max = 0;
		for(int i: arr) {
			int j = 1;
			while(i / 10 != 0) {
				j++;
				i = i / 10;
			}
		  if(j > max) max = j;
		}
		return max;
	}
	public static void basesort(int arr[], int max) {
		for(int i = 0; i < max ;i++) {
			//使用计数排序
			jishu(arr, i);
		}
	}

	public static void jishu(int arr[], int i) {
		//temp为对arr的某一位的映射
		int temp[] = new int[arr.length];
		// 找到要排序的位数
		for (int k = 0; k < arr.length; k++) {
			temp[k] = arr[k];
			for (int j = i; j > 0; j--) {
				temp[k] = temp[k] / 10;
			}
			temp[k] = temp[k] % 10;
			}
		
		//对temp使用计数排序
		//time为辅助数组
		int[] time = new int[10];
		for(int k = 0; k < temp.length; k++) {
			time[temp[k]]++;
		}
		//累计数组,增加稳定性
		for(int k  = 0; k < time.length - 1; k++) {
			time[k + 1] = time[k] + time[k + 1];
		}
		int[] result = new int[arr.length];
		//对原数组进行排序
		for(int k = arr.length - 1; k >= 0 ;k--) {
			result[--time[temp[k]]] = arr[k];
		}
		//赋值回arr
		int p = 0;
		for(int k: result) {
			arr[p++] = k;
		}

		

	}

}

```

+ 分为低位优先排序与高位优先排序，高位优先排序实际上用到了分治思想





综上，得出结论: **选择排序、快速排序、希尔排序、堆排序不是稳定的排序算法，而冒泡排序、插入排序、归并排序和基数排序是稳定的排序算法**



![image-20230412203749143](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230412203749143.png)
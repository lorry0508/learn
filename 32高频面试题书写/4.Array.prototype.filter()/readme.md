### 语法
    var newArray = arr.filter(callback(element[,index[,array]])[, thisArg]);

#### 参数
##### callback
    用来测试数组的每个元素的函数。返回true表示该元素通过测试，保留该元素，false则不保留。
    它接受一下三个参数：
###### element
    数组中正在处理的元素
##### index 可选
    正在处理的元素在数组中的索引
##### array 可选
    调用filter函数本身

#### thisArg 可选
    执行callback时，用于this的值


#### 返回值
    一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
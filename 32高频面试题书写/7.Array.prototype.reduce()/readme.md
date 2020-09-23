#### 参数
##### callback
    执行数组中每个值（如果没有提供initialValue则第一个值除外）的函数，包含四个参数：
###### accumulator
    累计器累计回调的返回值；它是上一次调用回调时返回的累积值，或initialValue
###### currentValue
    数组正在处理的元素
###### index 可选
    数组中正在处理的元素的索引下标。如果提供了initialValue,则其实索引号为0，否则从索引1起始。
###### array 可选
    调用reduce()的数组。

##### initialValue 可选
    作为第一次调用callback函数时的第一个参数的值。如果没有提供初始值，则使用数组中的第一个元素。在没有初始值的空数组上调用reduce将报错。


#### 返回值
    函数累计处理的结果
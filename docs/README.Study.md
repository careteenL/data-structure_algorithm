# 存放学习文档

## 目录
- [时间复杂度和空间复杂度](#时间复杂度和空间复杂度)
  - [插入排序时间复杂度分析](#插入排序时间复杂度分析)
  - [反转长度为n的数组的空间复杂度](#反转长度为n的数组的空间复杂度)
  - [二分查找的时间空间复杂度](#二分查找的时间空间复杂度)
- [复杂度的本质](#复杂度的本质)
- [递归函数复杂度分析方法](#递归函数复杂度分析方法)
- [排序算法](#排序算法)
    - [排序算法介绍](#排序算法介绍)
    - [基于比较的排序算法](#基于比较的排序算法)
    - [快速排序](#快速排序)
    - [合并排序的优化](#合并排序的优化)
    - [计数排序](#计数排序)
    - [基数排序](#基数排序)
    - [桶排序](#桶排序)
    - [外部排序](#外部排序)
- [递归](#递归)
    - [递归的基本概念](#递归的基本概念)
        - [汉诺塔](#汉诺塔)
    - [用递归绘制图形](#用递归绘制图形)
    - [递归和穷举问题](#递归和穷举问题)
        - [子集](#子集)
        - [全排列](#全排列)
    - [组合问题](#组合问题)
    - [递归空间优化](#递归空间优化)
    - [回溯算法](#回溯算法)
    - [重复子问题优化](#重复子问题优化)
        - 斐波那契数列优化
        - 斐波那契数列复杂版（上台阶）优化

## 时间复杂度和空间复杂度

时间复杂度衡量算法**执行时间**随着**输入规模**增加而增长的关系，是一种对算法的**分类**。

空间复杂度是指算法用了多少额外的空间。

### 插入排序时间复杂度分析

![docs-insertion-sort-time](../assets/docs-insertion-sort-time.png)

最好最坏时间复杂度分析

![docs-insertion-sort-time-average](../assets/docs-insertion-sort-time-average.png)

### 反转长度为n的数组的空间复杂度

![docs-reverse-space](../assets/docs-reverse-space.png)

### 二分查找的时间空间复杂度

![docs-binary-search-time](../assets/docs-binary-search-time.png)

![docs-binary-search-space](../assets/docs-binary-search-space.png)


### 二分查找小总结

![docs-time-space-summary](../assets/docs-time-space-summary.png)

### k分查找

![docs-k-search-time](../assets/docs-k-search-time.png)

### 二分查找递归时间空间复杂度

![docs-binary-search-recursive-time](../assets/docs-binary-search-recursive-time.png)

### 思考

![docs-time-space-think](../assets/docs-time-space-think.png)

## 复杂度的本质

![docs-complexity-1](../assets/docs-complexity-1.png)
![docs-complexity-2](../assets/docs-complexity-2.png)
![docs-complexity-3](../assets/docs-complexity-3.png)
![docs-complexity-4](../assets/docs-complexity-4.png)
![docs-complexity-5](../assets/docs-complexity-5.png)
![docs-complexity-6](../assets/docs-complexity-6.png)
![docs-complexity-7](../assets/docs-complexity-7.png)
![docs-complexity-8](../assets/docs-complexity-8.png)
![docs-complexity-9](../assets/docs-complexity-9.png)
![docs-complexity-10](../assets/docs-complexity-10.png)
![docs-complexity-11](../assets/docs-complexity-11.png)

## 递归函数复杂度分析方法

![docs-analysis-1](../assets/docs-analysis-1.png)
![docs-analysis-2](../assets/docs-analysis-2.png)
![docs-analysis-3](../assets/docs-analysis-3.png)
![docs-analysis-4](../assets/docs-analysis-4.png)
![docs-analysis-5](../assets/docs-analysis-5.png)
![docs-analysis-6](../assets/docs-analysis-6.png)
![docs-analysis-7](../assets/docs-analysis-7.png)
![docs-analysis-8](../assets/docs-analysis-8.png)
![docs-analysis-9](../assets/docs-analysis-9.png)
![docs-analysis-10](../assets/docs-analysis-10.png)
![docs-analysis-11](../assets/docs-analysis-11.png)
![docs-analysis-12](../assets/docs-analysis-12.png)
![docs-analysis-13](../assets/docs-analysis-13.png)
![docs-analysis-14](../assets/docs-analysis-14.png)
![docs-analysis-15](../assets/docs-analysis-15.png)
![docs-analysis-16](../assets/docs-analysis-16.png)
![docs-analysis-17](../assets/docs-analysis-17.png)
![docs-analysis-18](../assets/docs-analysis-18.png)
![docs-analysis-19](../assets/docs-analysis-19.png)
![docs-analysis-20](../assets/docs-analysis-20.png)
![docs-analysis-21](../assets/docs-analysis-21.png)
![docs-analysis-22](../assets/docs-analysis-22.png)
![docs-analysis-23](../assets/docs-analysis-23.png)
![docs-analysis-24](../assets/docs-analysis-24.png)
![docs-analysis-25](../assets/docs-analysis-25.png)
![docs-analysis-26](../assets/docs-analysis-26.png)
![docs-analysis-27](../assets/docs-analysis-27.png)
![docs-analysis-28](../assets/docs-analysis-28.png)
![docs-analysis-29](../assets/docs-analysis-29.png)
![docs-analysis-30](../assets/docs-analysis-30.png)

## 排序算法

## 排序算法介绍

![docs-desc-1](../assets/docs-desc-1.jpg)
![docs-desc-2](../assets/docs-desc-2.jpg)
![docs-desc-3](../assets/docs-desc-3.jpg)
![docs-desc-4](../assets/docs-desc-4.jpg)
![docs-desc-5](../assets/docs-desc-5.jpg)
![docs-desc-6](../assets/docs-desc-6.jpg)
![docs-desc-7](../assets/docs-desc-7.jpg)

## 基于比较的排序算法

![docs-compare-1](../assets/docs-compare-1.jpg)
![docs-compare-2](../assets/docs-compare-2.jpg)
![docs-compare-3](../assets/docs-compare-3.jpg)
![docs-compare-4](../assets/docs-compare-4.jpg)
![docs-compare-5](../assets/docs-compare-5.jpg)

## 快速排序

![docs-quick-sort-1](../assets/docs-quick-sort-1.jpg)
![docs-quick-sort-2](../assets/docs-quick-sort-2.jpg)
![docs-quick-sort-3](../assets/docs-quick-sort-3.jpg)
![docs-quick-sort-4](../assets/docs-quick-sort-4.jpg)
![docs-quick-sort-5](../assets/docs-quick-sort-5.jpg)
![docs-quick-sort-6](../assets/docs-quick-sort-6.jpg)
![docs-quick-sort-7](../assets/docs-quick-sort-7.jpg)
![docs-quick-sort-8](../assets/docs-quick-sort-8.jpg)
![docs-quick-sort-9](../assets/docs-quick-sort-9.jpg)
![docs-quick-sort-10](../assets/docs-quick-sort-10.jpg)
![docs-quick-sort-11](../assets/docs-quick-sort-11.jpg)
![docs-quick-sort-12](../assets/docs-quick-sort-12.jpg)
![docs-quick-sort-13](../assets/docs-quick-sort-13.jpg)
![docs-quick-sort-14](../assets/docs-quick-sort-14.jpg)
![docs-quick-sort-15](../assets/docs-quick-sort-15.jpg)
![docs-quick-sort-16](../assets/docs-quick-sort-16.jpg)
![docs-quick-sort-17](../assets/docs-quick-sort-17.jpg)
![docs-quick-sort-18](../assets/docs-quick-sort-18.jpg)
![docs-quick-sort-19](../assets/docs-quick-sort-19.jpg)
![docs-quick-sort-20](../assets/docs-quick-sort-20.jpg)
![docs-quick-sort-21](../assets/docs-quick-sort-21.jpg)
![docs-quick-sort-22](../assets/docs-quick-sort-22.jpg)
![docs-quick-sort-23](../assets/docs-quick-sort-23.jpg)
![docs-quick-sort-24](../assets/docs-quick-sort-24.jpg)
![docs-quick-sort-25](../assets/docs-quick-sort-25.jpg)
![docs-quick-sort-26](../assets/docs-quick-sort-26.jpg)

## 合并排序的优化
![docs-merge-sort-1](../assets/docs-merge-sort-1.jpg)
![docs-merge-sort-2](../assets/docs-merge-sort-2.jpg)
![docs-merge-sort-3](../assets/docs-merge-sort-3.jpg)
![docs-merge-sort-4](../assets/docs-merge-sort-4.jpg)
![docs-merge-sort-5](../assets/docs-merge-sort-5.jpg)
![docs-merge-sort-6](../assets/docs-merge-sort-6.jpg)
![docs-merge-sort-7](../assets/docs-merge-sort-7.jpg)
![docs-merge-sort-8](../assets/docs-merge-sort-8.jpg)
![docs-merge-sort-9](../assets/docs-merge-sort-9.jpg)
![docs-merge-sort-10](../assets/docs-merge-sort-10.jpg)
![docs-merge-sort-11](../assets/docs-merge-sort-11.jpg)
![docs-merge-sort-12](../assets/docs-merge-sort-12.jpg)
![docs-merge-sort-13](../assets/docs-merge-sort-13.jpg)
![docs-merge-sort-14](../assets/docs-merge-sort-14.jpg)
![docs-merge-sort-15](../assets/docs-merge-sort-15.jpg)
![docs-merge-sort-16](../assets/docs-merge-sort-16.jpg)
![docs-merge-sort-17](../assets/docs-merge-sort-17.jpg)
![docs-merge-sort-18](../assets/docs-merge-sort-18.jpg)
![docs-merge-sort-19](../assets/docs-merge-sort-19.jpg)

## 计数排序
![docs-count-sort-1](../assets/docs-count-sort-1.jpg)
![docs-count-sort-2](../assets/docs-count-sort-2.jpg)
![docs-count-sort-3](../assets/docs-count-sort-3.jpg)
![docs-count-sort-4](../assets/docs-count-sort-4.jpg)
![docs-count-sort-5](../assets/docs-count-sort-5.jpg)
![docs-count-sort-6](../assets/docs-count-sort-6.jpg)

## 基数排序
![docs-radix-sort-1](../assets/docs-radix-sort-1.jpg)
![docs-radix-sort-2](../assets/docs-radix-sort-2.jpg)
![docs-radix-sort-3](../assets/docs-radix-sort-3.jpg)
![docs-radix-sort-4](../assets/docs-radix-sort-4.jpg)
![docs-radix-sort-5](../assets/docs-radix-sort-5.jpg)
![docs-radix-sort-6](../assets/docs-radix-sort-6.jpg)
![docs-radix-sort-7](../assets/docs-radix-sort-7.jpg)
![docs-radix-sort-8](../assets/docs-radix-sort-8.jpg)

## 桶排序
![docs-bucket-sort-1](../assets/docs-bucket-sort-1.jpg)
![docs-bucket-sort-2](../assets/docs-bucket-sort-2.jpg)
![docs-bucket-sort-3](../assets/docs-bucket-sort-3.jpg)
![docs-bucket-sort-4](../assets/docs-bucket-sort-4.jpg)
![docs-bucket-sort-5](../assets/docs-bucket-sort-5.jpg)
![docs-bucket-sort-6](../assets/docs-bucket-sort-6.jpg)
![docs-bucket-sort-7](../assets/docs-bucket-sort-7.jpg)
![docs-bucket-sort-8](../assets/docs-bucket-sort-8.jpg)
![docs-bucket-sort-9](../assets/docs-bucket-sort-9.jpg)
![docs-bucket-sort-10](../assets/docs-bucket-sort-10.jpg)
![docs-bucket-sort-11](../assets/docs-bucket-sort-11.jpg)

## 外部排序
![docs-external-sort-1](../assets/docs-external-sort-1.jpg)
![docs-external-sort-2](../assets/docs-external-sort-2.jpg)
![docs-external-sort-3](../assets/docs-external-sort-3.jpg)
![docs-external-sort-4](../assets/docs-external-sort-4.jpg)
![docs-external-sort-5](../assets/docs-external-sort-5.jpg)
![docs-external-sort-6](../assets/docs-external-sort-6.jpg)
![docs-external-sort-7](../assets/docs-external-sort-7.jpg)
![docs-external-sort-8](../assets/docs-external-sort-8.jpg)
![docs-external-sort-9](../assets/docs-external-sort-9.jpg)
![docs-external-sort-10](../assets/docs-external-sort-10.jpg)
![docs-external-sort-11](../assets/docs-external-sort-11.jpg)
![docs-external-sort-12](../assets/docs-external-sort-12.jpg)
![docs-external-sort-13](../assets/docs-external-sort-13.jpg)
![docs-external-sort-14](../assets/docs-external-sort-14.jpg)
![docs-external-sort-15](../assets/docs-external-sort-15.jpg)
![docs-external-sort-16](../assets/docs-external-sort-16.jpg)
![docs-external-sort-17](../assets/docs-external-sort-17.jpg)
![docs-external-sort-18](../assets/docs-external-sort-18.jpg)
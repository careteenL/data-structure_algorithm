# 火车车厢重排问题

## 前言

![alg-queue-problem-1](../../assets/alg-queue-problem-1.jpg)

## 分析

![alg-queue-problem-2](../../assets/alg-queue-problem-2.jpg)
![alg-queue-problem-3](../../assets/alg-queue-problem-3.jpg)
![alg-queue-problem-4](../../assets/alg-queue-problem-4.jpg)
- 使用数组在出队时时间复杂度为O(n)
- **取而代之使用队列在出队时时间复杂度为O(1)**
![alg-queue-problem-5](../../assets/alg-queue-problem-5.jpg)
![alg-queue-problem-6](../../assets/alg-queue-problem-6.jpg)

## 实现

- [使用数组详细实现](./queue-problem.js#L9)
- [使用数组测试用例](../../test/queue.spec.js#L17)

- [使用队列详细实现](./queue-problem.js#L36)
- [使用队列测试用例](../../test/queue.spec.js#L28)

## 总结

![alg-queue-problem-7](../../assets/alg-queue-problem-7.jpg)

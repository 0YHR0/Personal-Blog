---
title: Ch01 Introduction
date: 2022-10-31
tags:
 - FPGA
 - VHDL
categories:
 - VHDL

---

# Introduction



![image-20221031174138851](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221031174138851.png)

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--use IEEE.NUMERIC_STD.ALL;

-- Uncomment the following library declaration if instantiating
-- any Xilinx leaf cells in this code.
--library UNISIM;
--use UNISIM.VComponents.all;

entity led is
Port(
     switch_1 : in std_logic;
     switch_2 : in std_logic;
     led_1: out std_logic;
     led_2: out std_logic
);
--  Port ( );
end led;

architecture Behavioral of led is

begin
led_1 <= switch_1;
led_2 <= switch_2;

end Behavioral;

```



**architecture**中的语句都是并行（同时）执行，不是顺序执行

![image-20221102204415325](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221102204415325.png)![image-20221102204443680](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221102204443680.png)![image-20221102204516779](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221102204516779.png)

+ 横坐标和纵坐标同时assign，看最后的结果是什么

## signal![image-20221102210022769](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221102210022769.png)![image-20221102210214915](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221102210214915.png)

![image-20221031231405497](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221031231405497.png)

![image-20221101165635350](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101165635350.png)



## When

![image-20221101170141844](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101170141844.png)



## With select

![image-20221101171013553](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101171013553.png)






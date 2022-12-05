---
title: Ch05 Adder
date: 2022-11-24
tags:
 - FPGA
 - VHDL
categories:
 - VHDL
---

## ![image-20221124162923512](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221124162923512.png)





h_adder.vhdl

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity h_adder is
    port ( 
        in0_i, in1_i : in  std_logic;
        s_o, cry_o   : out std_logic
    );
end h_adder;

architecture rtl of h_adder is
begin
    s_o   <= in0_i xor in1_i;
    cry_o <= in0_i and in1_i;
end rtl;

```





![image-20221124162941881](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221124162941881.png)

f_adder.vhdl

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity f_adder is
    Port (
        in0_i, in1_i, in2_i : in  std_logic;
        sum_o, carry_o      : out std_logic
    );
end f_adder;

architecture rtl of f_adder is
    component h_adder
        port (
            in0_i, in1_i:in  std_logic;
            s_o, cry_o  :out std_logic
        );
    end component;
    signal s1_s, s2_s, s3_s : std_logic;
begin
    h1: h_adder port map(in0_i=>in0_i,in1_i=>in1_i,s_o=>s1_s,cry_o=>s2_s);
    h2: h_adder port map(in0_i=>s1_s,in1_i=>in2_i,s_o=>sum_o,cry_o=>s3_s);
    carry_o <= s2_s or s3_s;
end rtl;

```



rip_cry_adder.vhdl

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity rip_cry_adder is
    generic (
        BUS_WIDTH : natural := 8
    );
    port (
        cry_i        : in  std_logic;
        in0_i, in1_i : in  std_logic_vector(BUS_WIDTH-1 downto 0);
        sum_o        : out std_logic_vector(BUS_WIDTH-1 downto 0);
        cry_o        : out std_logic
    );
end rip_cry_adder;

architecture rtl of rip_cry_adder is
    component f_adder
    port (
        in0_i, in1_i, in2_i : in std_logic;
        sum_o, carry_o      : out std_logic
    );
    end component;
    signal cry_s : std_logic_vector(BUS_WIDTH downto 0);
begin
    cry_s(0) <= cry_i;
    adder_gen:
    for i in 0 to (BUS_WIDTH-1) generate
        adder: f_adder port map(in0_i=>in0_i(i),in1_i=>in1_i(i),in2_i=>cry_s(i),sum_o=>sum_o(i),carry_o=>cry_s(i+1));
    end generate adder_gen;
    cry_o <= cry_s(BUS_WIDTH);
end rtl;
```

![image-20221124162837437](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221124162837437.png)


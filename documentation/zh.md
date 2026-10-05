<!-- ELUCENIA technical documentation · wells-tvp · zh · no clinical/professional/rights approval -->

# Wells 深静脉血栓评分

[条件、来源与许可](https://elucenia.org/zh/tools/wells-tvp)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 活动性癌症（过去 6 个月内治疗或姑息治疗）

`cancer`

### 下肢瘫痪、轻瘫或近期石膏固定

`paralisia`

### 卧床≥ 3天，或过去12周内接受需全身麻醉或区域麻醉的大手术

`acamado`

### 沿深静脉系统的局限性压痛

`dor_trajeto`

### 整个下肢水肿

`edema_total`

### 小腿周径比对侧大≥ 3 cm（在胫骨粗隆下方10 cm测量）

`panturrilha`

### 凹陷性水肿仅限于有症状的下肢

`cacifo`

### 浅表侧支静脉（非曲张静脉）

`colaterais`

### 有记录的既往深静脉血栓

`tvp_prev`

### 其他诊断的可能性等于或高于深静脉血栓

`alternativo`

## 方法版本

Wells DVT 2003，表1：9个因素+其他诊断−2；2级≥2 / \<2；3级模型单独显示，其版本尚未核对

## 已记录的公式

每项计1分（癌症、瘫痪/石膏固定、卧床或手术、沿静脉走行的压痛、整条腿肿胀、小腿周径增加≥ 3 cm、单侧凹陷性水肿、侧支静脉、既往DVT）；若其他诊断至少同样可能，则计−2分。

2级（Wells 2003）：≥ 2 = DVT可能性较高；≤ 1 = 可能性较低。3级：≤ 0低；1–2中等；≥ 3高。

## 限制与适用人群

Wells 2003策略在疑似下肢深静脉血栓形成（DVT）的门诊患者中研究。按方案免于超声检查的决定要求临床概率不大和D-二聚体阴性同时成立。评分本身不能确诊或排除DVT；D-二聚体检测法和纳入资格标准应与所用方案一致。 Wells 2003表1规定小腿周径差至少3 cm，在胫骨粗隆下方10 cm处测量；过去12周内的大手术需全身麻醉或区域麻醉。该表仅定义2级模型（≥2可能性较高；\<2可能性较低）；此处显示的3级模型版本仍未核对。

## 参考文献

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

#install.packages('dplyr')
#install.packages('bestNormalize')
#install.packages('ggplot2')
#install.packages('easyGgplot2')
#install.packages('devtools')
library(dplyr)
library(bestNormalize)
library(devtools)
library(ggplot2)
library(stringr)
#devtools::install_github("kassambara/easyGgplot2")
library(easyGgplot2)

setwd("E:/aspects/cyclomaticComplexityAnalysisStudy/QualityChecker/results/resultAnalysis")
loadedData <- read.csv('../scenarios/nativeVSentireJSON/classesTYPHONE.csv', sep=";")
firstFormData <<- read.csv('../forms/nativeExpressions/generalAGGREGATETYPHONE_CYCLFORM1.csv', sep=";")
secondFormData <<- read.csv('../forms/entireJSONExpressions/generalAGGREGATETYPHONE_CYCLFORM2.csv', sep=";")

loadedDataWithDecorators <- filter(loadedData, Overall.file.decorastors.2 > 0)
firstFormDataWithDecorators <- filter(firstFormData, Overall.file.decorastors.2 > 0)
secondFormDataWithDecorators <- filter(secondFormData, Overall.file.decorastors.2 > 0)
print(head(loadedDataWithDecorators))
print(colnames(loadedData))
print(nrow(loadedDataWithDecorators))
print(loadedData[['Overall.file.decorastors.2']])
effortDouble <- effortDoubleFirstForm

effortDoubleDifference <- as.double(unlist(lapply(loadedDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))
effortDoubleFirstForm <- as.double(unlist(lapply(firstFormDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))
effortDoubleSecondForm <- as.double(unlist(lapply(secondFormDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))
effortDoubleWithDifference <- unlist(lapply(seq_along(effortDouble), function(index) effortDouble[index] + effortDoubleDifference[index]))


print(cor(effortDoubleFirstForm, effortDoubleWithDifference, method = "spearman")) # PAIR TEST variables are correlated!!!

effortDouble <- effortDoubleFirstForm




#bugsDouble <- as.double(unlist(lapply(loadedDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))
#cyclDensityDouble <- as.double(unlist(lapply(loadedDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))
#effortDouble <- as.double(unlist(lapply(loadedDataWithDecorators$Halstead.Effort, function(a)  str_replace(a, ",", "."))))

numberDecorators <- as.double(unlist(lapply(loadedDataWithDecorators$Overall.file.decorastors.2, function(a)  str_replace(a, ",", "."))))
originalPriceNormalized <- unlist(lapply(seq_along(effortDouble), function(index) effortDouble[index] / as.double(numberDecorators[index])))
originalPriceNormalized <- unlist(lapply(seq.int(1, length(originalPriceNormalized), 5), function(index) mean(originalPriceNormalized[index: index + 3])))
print(numberDecorators)
print(effortDouble)
print(originalPriceNormalized)
print(effortDouble[1])
layout(1)
qqnorm(originalPriceNormalized,
       main = "Q-Q plot Halstead effort")
qqline(originalPriceNormalized,
       main = "Q-Q plot Halstead effort")
plot(originalPriceNormalized, xlab="Pôvodná cena", ylab="hodnoty", main="Density diagram pre znormalizovanú pôvodnú cenu")

plot(ggplot2.violinplot(data=originalPriceNormalized, xtitle="Violin plot pre pôvodnú cenu"), xlab="hodnoty", ylab="Pôvodná cena", main="Violin plot pre pôvodnú cenu")

#test normality
print(shapiro.test(originalPriceNormalized))

#effortDouble <- effortDouble[effortDouble != 0 && effortDoubleSecondForm != 0]
#effortDoubleSecondForm <- effortDoubleSecondForm[effortDouble != 0 && effortDoubleSecondForm != 0]
print(effortDoubleFirstForm)
print(effortDoubleSecondForm)
print(wilcox.test(effortDoubleFirstForm, effortDoubleSecondForm))
print(wilcox.test(effortDoubleFirstForm, effortDoubleSecondForm, paired = TRUE, exact = TRUE, correct = TRUE,
                  conf.int = TRUE, conf.level = 0.95))

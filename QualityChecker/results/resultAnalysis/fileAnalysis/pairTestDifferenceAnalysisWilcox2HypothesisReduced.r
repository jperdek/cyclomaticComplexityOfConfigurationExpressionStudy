#install.packages('dplyr')
#install.packages('bestNormalize')
#install.packages('ggplot2')
#install.packages('easyGgplot2')
#install.packages('devtools')
#install.packages('data.table')
library(dplyr)
library(bestNormalize)
library(devtools)
library(ggplot2)
library(broom)
library(stringr)
library(data.table)
#devtools::install_github("kassambara/easyGgplot2")
library(easyGgplot2)

setwd("E:/aspects/cyclomaticComplexityAnalysisStudy/QualityChecker/results/resultAnalysis")
firstFormData <<- read.csv('../forms/nativeExpressions/generalAGGREGATETYPHONE_CYCLFORM1.csv', sep=";")
secondFormData <<- read.csv('../forms/entireJSONExpressions/generalAGGREGATETYPHONE_CYCLFORM2.csv', sep=";")


firstFormData <- filter(firstFormData, Overall.file.decorastors.2 > 0)
fourthFormData <- filter(secondFormData, Overall.file.decorastors.2 > 0)
fourthFormData <- fourthFormData[colnames(firstFormData)]
firstFormData2 <- data.frame(firstFormData)

lapply(colnames(firstFormData), function(columnName, data) {
  firstFormData[[columnName]] <<- as.double(unlist(lapply(firstFormData[[columnName]], function(a)  str_replace(a, ",", "."))))
}, data=firstFormData)
lapply(colnames(fourthFormData), function(columnName, data) {
  fourthFormData[[columnName]] <<- as.double(unlist(lapply(fourthFormData[[columnName]], function(a)  str_replace(a, ",", "."))))
}, data=fourthFormData)


filteredIndexes <- ((as.double(firstFormData[["Halstead.Effort"]]) -  as.double(fourthFormData[["Halstead.Effort"]])) < 500.0)
print(filteredIndexes)
firstFormData <- firstFormData[filteredIndexes, ]
write.table(firstFormData2[filteredIndexes, ], ".\\fileAnalysis\\helper.csv", row.names=FALSE, dec=",", sep=";")
fourthFormData <- fourthFormData[filteredIndexes, ]
print(nrow(firstFormData))

ifPaired <- TRUE
chosenAlternative <- c("two.sided", "less", "greater")
testColumnNames <- c('comparedName', 'correlation', 'statistics W', 'p.value', 'null.value', 'alternative', 'method', 'data.name', 'confidence.interval.start', 'confidence.interval.end', 'estimate')
finalWilcoxTest <<- data.frame(matrix(nrow = 0, ncol = length(testColumnNames)))
colnames(finalWilcoxTest) <- testColumnNames

#firstFormData <- firstFormData[,unlist(lapply(firstFormData,is.numeric))]
#secondFormData <- secondFormData[,unlist(lapply(secondFormData,is.numeric))]
lapply(colnames(firstFormData), function(columnName, data1, data2) {
  if (length(na.omit(data1[[columnName]])) == nrow(data1)) {
    correlation <- cor(data1[[columnName]], data2[[columnName]], method = "spearman")
    wilcoxTest <- wilcox.test(data1[[columnName]], data2[[columnName]], alternative=chosenAlternative, paired=ifPaired, exact = TRUE, correct = TRUE,
                              conf.int = TRUE, conf.level = 0.95)
    print(columnName)
    print(wilcoxTest)
    if (ifPaired) {
      confInt <- as.vector(wilcoxTest$conf.int)
      finalWilcoxTest <<- rbind(finalWilcoxTest, c(columnName, as.double(correlation), wilcoxTest$statistic,
                                                   as.double(wilcoxTest$p.value), as.double(wilcoxTest$null.value), wilcoxTest$alternative, 
                                                                 wilcoxTest$method, wilcoxTest$data.name, as.double(confInt[1]), as.double(confInt[2]), as.double(wilcoxTest$estimate )))
    } else {
      confInt <- as.vector(wilcoxTest$conf.int)
      finalWilcoxTest <<- rbind(finalWilcoxTest, c(columnName, as.double(correlation), as.double(wilcoxTest$statistic[["W"]]),
                                                   as.double(wilcoxTest$p.value), as.double(wilcoxTest$null.value), wilcoxTest$alternative, 
                                                               wilcoxTest$method, wilcoxTest$data.name, as.double(confInt[1]), as.double(confInt[2]), as.double(wilcoxTest$estimate )))
    }
    
  } else {
    finalWilcoxTest <<- rbind(finalWilcoxTest, c(columnName, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1))
  }
}, data1=firstFormData, data2=fourthFormData)
colnames(finalWilcoxTest) <- testColumnNames
print(finalWilcoxTest)
print(nrow(firstFormData))
write.table(finalWilcoxTest, ".\\fileAnalysis\\pairedTestFormNativeEntireJSONReduced.csv", row.names=FALSE, dec=",", sep=";")


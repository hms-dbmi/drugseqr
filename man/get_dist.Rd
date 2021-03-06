% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/diff_utils.R
\name{get_dist}
\alias{get_dist}
\title{Enhanced Distance Matrix Computation and Visualization}
\usage{
get_dist(x, method = "euclidean", stand = FALSE, ...)
}
\arguments{
\item{x}{a numeric matrix or a data frame.}

\item{method}{the distance measure to be used. This must be one of
"euclidean", "maximum", "manhattan", "canberra", "binary", "minkowski",
"pearson", "spearman" or "kendall".}

\item{stand}{logical value; default is FALSE. If TRUE, then the data will be
standardized using the function scale(). Measurements are standardized for
each variable (column), by subtracting the variable's mean value and
dividing by the variable's standard deviation.}

\item{...}{other arguments to be passed to the function dist() when using get_dist().}
}
\value{
\itemize{ \item get_dist(): returns an object of class "dist". \item
  fviz_dist(): returns a ggplot2 }
}
\description{
Clustering methods classify data samples into groups of similar
  objects. This process requires some methods for measuring the distance or
  the (dis)similarity between the observations. Read more:
  \href{http://www.sthda.com/english/wiki/clarifying-distance-measures-unsupervised-machine-learning}{STHDA
   website - clarifying distance measures.}. \itemize{ \item get_dist():
  Computes a distance matrix between the rows of a data matrix. Compared to
  the standard \code{\link[stats]{dist}}() function, it supports
  correlation-based distance measures including "pearson", "kendall" and
  "spearman" methods. \item fviz_dist(): Visualizes a distance matrix }
}
\examples{
data(USArrests)
res.dist <- dseqr:::get_dist(USArrests, stand = TRUE, method = "pearson")
}
\seealso{
\code{\link[stats]{dist}}
}
\author{
Alboukadel Kassambara \email{alboukadel.kassambara@gmail.com}
}
\keyword{internal}

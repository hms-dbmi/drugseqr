% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/diff_utils.R
\name{plotlyMDS}
\alias{plotlyMDS}
\title{Plot MDS plotlys}
\usage{
plotlyMDS(
  scaling,
  scaling_adj = NULL,
  group_colors = c("#337ab7", "#e6194b"),
  adjusted = FALSE,
  title = "Sammon MDS plots"
)
}
\arguments{
\item{scaling}{tibble with coordinate columns MDS1 and MDS2 calculated from expression data without correction for surrogate variables}

\item{scaling_adj}{Optional. Same as \code{scaling} but using expression data adjusted for surrogate variables.
If omitted, an MDS plot is created only for \code{scaling}.}

\item{group_colors}{colors to use, one for each unique groups in \code{scaling$Group}.}

\item{title}{Plot title.}
}
\value{
plotly object
}
\description{
Plot MDS plotlys
}
\keyword{internal}

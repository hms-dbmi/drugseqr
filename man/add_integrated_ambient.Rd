% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/load_scseq.R
\name{add_integrated_ambient}
\alias{add_integrated_ambient}
\title{Mark ambient outliers in combined dataset}
\usage{
add_integrated_ambient(combined, ambient)
}
\arguments{
\item{combined}{the combined scseqs}

\item{scseqs}{the original scseqs}
}
\value{
\code{combined} with \code{out_ambient} column added to \code{meta.features} slot of \code{SCT} assay.
}
\description{
A gene is marked as an ambient outlier if it is an ambient outlier in at least one of the datasets.
}
\keyword{internal}

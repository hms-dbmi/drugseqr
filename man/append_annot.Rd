% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/get_drugs_table.R
\name{append_annot}
\alias{append_annot}
\title{Bind annotation data to pdata}
\usage{
append_annot(pdata, study)
}
\arguments{
\item{pdata}{\code{data.frame} of pdata for either CMAP02 or L1000.}

\item{study}{Character identifying study. Either \code{'CMAP02'} or \code{'L1000'}.}
}
\value{
\code{pdata} with bound annotation columns.
}
\description{
For the moment, annotation data is Broad Repurposing Hub data.
}
\keyword{internal}

% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/modules-sc-utils.R
\name{get_exclude_dirs}
\alias{get_exclude_dirs}
\title{Get single-cell directories without fastq or cellranger files}
\usage{
get_exclude_dirs(sc_dir)
}
\arguments{
\item{sc_dir}{Path to single-cell data directory}
}
\value{
Character vector of directories/files to hide
}
\description{
Used so that all directories shown for new single-cell dataset contain
raw files.
}
\keyword{internal}

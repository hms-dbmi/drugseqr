% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/plot_scseq.R
\name{plot_scseq_dprimes}
\alias{plot_scseq_dprimes}
\title{Plot dprimes for integrated single-cell dataset with replicates.}
\usage{
plot_scseq_dprimes(gene, annot, selected_cluster, tts, exclude_ambient)
}
\arguments{
\item{gene}{a row name within data.frames of \code{tts} to plot dprimes for.}

\item{annot}{Charactor vector with cluster names for \code{tts}.}

\item{selected_cluster}{Name of \code{tts} indicating selected cluster.}

\item{tts}{List of topTables, one for each cluster.}

\item{exclude_ambient}{If true, ambient dprimes are greyed out along with non-significant genes.}
}
\value{
plotly object.
}
\description{
Plot dprimes for integrated single-cell dataset with replicates.
}
\keyword{internal}

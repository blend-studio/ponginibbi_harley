/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7801103Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Immagini del veicolo
/// </summary>
public class Vehicles_Images
{
	/// <summary>
	/// Commento
	/// </summary>
	/// <remarks>
	/// <para>Commento opzionale associato all'immagine.</para>
	/// </remarks>
	public string? Comment { get; set; }

	/// <summary>
	/// Altezza immagine
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-08-04</para>
	/// </remarks>
	/// <seealso cref="ImageWidth"/>
	public int ImageHeight { get; set; }

	/// <summary>
	/// URL immagine
	/// </summary>
	/// <remarks>
	/// <para>URL che punta al file di un'immagine del veicolo.</para>
	/// </remarks>
	/// <seealso cref="ThumbnailUrl"/>
	public string ImageUrl { get; set; }

	/// <summary>
	/// Larghezza immagine
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-08-04</para>
	/// </remarks>
	/// <seealso cref="ImageHeight"/>
	public int ImageWidth { get; set; }

	/// <summary>
	/// Foto interni
	/// </summary>
	/// <remarks>
	/// <para>Indica se l'immagine è relativa all'interno del veicolo</para>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public bool? Interior { get; set; }

	/// <summary>
	/// Altezza immagine in versione ridotta
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-08-04</para>
	/// </remarks>
	/// <seealso cref="ThumbnailWidth"/>
	public int ThumbnailHeight { get; set; }

	/// <summary>
	/// URL immagine in versione ridotta
	/// </summary>
	/// <remarks>
	/// <para>URL che punta al file di una versione ridotta dell'immagine del veicolo.</para>
	/// </remarks>
	/// <seealso cref="ImageUrl"/>
	public string ThumbnailUrl { get; set; }

	/// <summary>
	/// Larghezza immagine in versione ridotta
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-08-04</para>
	/// </remarks>
	/// <seealso cref="ThumbnailHeight"/>
	public int ThumbnailWidth { get; set; }
}

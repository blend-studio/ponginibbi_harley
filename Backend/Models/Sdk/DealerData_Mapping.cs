/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5384435Z
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
/// Corrispondenza tra i codici del DMS e i codici di Casa Madre
/// </summary>
/// <remarks>
/// <para>A partire da: 2022-02-17</para>
/// </remarks>
public class DealerData_Mapping
{
	/// <summary>
	/// Codice marca
	/// </summary>
	public string BrandCode { get; set; }

	/// <summary>
	/// Categoria di mapping
	/// </summary>
	public string Category { get; set; }

	/// <summary>
	/// Codice DMS
	/// </summary>
	public string? DmsCode { get; set; }

	/// <summary>
	/// ID elemento
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco dell'elemento.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Codice casa madre
	/// </summary>
	public string MakerCode { get; set; }

	/// <summary>
	/// Descrizione casa madre
	/// </summary>
	public string? MakerDescription { get; set; }

	/// <summary>
	/// Indica se il mapping è gestito
	/// </summary>
	public bool Managed { get; set; }
}

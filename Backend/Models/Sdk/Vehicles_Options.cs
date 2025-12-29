/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7801317Z
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
/// Dati relativi agli optional e agli accessori
/// </summary>
public class Vehicles_Options
{
	/// <summary>
	/// Accessorio aftermarket
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo optional o accessorio è aftermarket (non proveniente da casa madre).</para>
	/// </remarks>
	public bool IsAfterMarket { get; set; }

	/// <summary>
	/// Pacchetto
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo optional o accessorio è in realtà un raggruppamento di altri optional o accessori.</para>
	/// </remarks>
	public bool? IsPackage { get; set; }

	/// <summary>
	/// Optional qualificante
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo optional identifica uno specifico allestimento del veicolo.</para>
	/// <para>A partire da: 2019-11-27</para>
	/// </remarks>
	public bool? IsQualifying { get; set; }

	/// <summary>
	/// Accessorio di serie
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo optional o accessorio è di serie.</para>
	/// </remarks>
	public bool? IsSeries { get; set; }

	/// <summary>
	/// ID optional o accessorio
	/// </summary>
	/// <remarks>
	/// <para>Codice identificativo dell'optional o accessorio. Tipicamente proviene da casa madre o dallo strumento di valutazione.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Descrizione
	/// </summary>
	/// <remarks>
	/// <para>Descrizione estesa di questo elemento.</para>
	/// </remarks>
	public string? Label { get; set; }

	/// <summary>
	/// Prezzo
	/// </summary>
	public double? Price { get; set; }
}

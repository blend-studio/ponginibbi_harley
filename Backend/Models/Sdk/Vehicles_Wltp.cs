/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7802499Z
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
/// Dati WLTP
/// </summary>
/// <remarks>
/// <para>A partire da: 2021-01-14</para>
/// </remarks>
public class Vehicles_Wltp
{
	/// <summary>
	/// Codice del rilevamento
	/// </summary>
	public string Code { get; set; }

	/// <summary>
	/// Tipo di alimentazione
	/// </summary>
	public string? FuelType { get; set; }

	/// <summary>
	/// ID
	/// </summary>
	public string ItemId { get; set; }

	/// <summary>
	/// Descrizione
	/// </summary>
	public string? Label { get; set; }

	/// <summary>
	/// Soglia superiore
	/// </summary>
	public string? MaxThreshold { get; set; }

	/// <summary>
	/// Soglia inferiore
	/// </summary>
	public string? MinThreshold { get; set; }

	/// <summary>
	/// Ordinamento
	/// </summary>
	public int? Order { get; set; }

	/// <summary>
	/// Fase
	/// </summary>
	public string? Phase { get; set; }

	/// <summary>
	/// Range
	/// </summary>
	public string? Range { get; set; }

	/// <summary>
	/// Date e ora
	/// </summary>
	public DateTime? Timestamp { get; set; }

	/// <summary>
	/// Unità di misura
	/// </summary>
	public string? Unit { get; set; }

	/// <summary>
	/// Valore
	/// </summary>
	public string? Value { get; set; }
}

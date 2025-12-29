/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7801240Z
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
/// Contenuti multimediali associati al veicolo
/// </summary>
/// <remarks>
/// <para>A partire da: 2019-10-25</para>
/// </remarks>
public class Vehicles_Media
{
	/// <summary>
	/// ID elemento multimediale
	/// </summary>
	/// <remarks>
	/// <para>Codice identificativo dell'elemento multimediale.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Data di ultima modifica
	/// </summary>
	public DateTime UpdatedAt { get; set; }

	/// <summary>
	/// Indirizzo risorsa
	/// </summary>
	/// <remarks>
	/// <para>URI dell'elemento multimediale. Tipicamente è un URL.</para>
	/// </remarks>
	public string Uri { get; set; }
}
